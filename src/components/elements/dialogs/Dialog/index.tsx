import { useState } from 'react';
import { IoTrashBinOutline } from 'react-icons/io5';
import { Button, Input } from '../../..';

// alerProps
interface AlertProps {
  show: boolean;
  title: string;
  description?: string;
  type?: 'warning' | 'success' | 'error' | 'info' | 'file';
}

export const Dialog: React.FC<AlertProps> = ({
  show = false,
  title,
  description,
  type = 'warning',
}) => {
  const [isOpen, setIsOpen] = useState(show);

  // close when click ouside Modal
  const handleAlertModal = (e: any) => {
    const body = e.target.classList.contains('alert-card');
    if (body) return setIsOpen(false);
  };

  // open dialog
  const openModal = () => {
    setIsOpen(true);
  };

  // close Dialog
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <dialog className={`dialog ${isOpen && 'open'}`} modal-mode="mega">
      <form method="dialog">
        <header>
          <section className="icon-headline">
            <IoTrashBinOutline />
            <h4>{title || type}</h4>
          </section>
          <button onClick={() => {}} type="button" title="Close dialog">
            <title>Close dialog icon</title>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>
        <article>
          {type === 'file' && (
            <>
              <section className="labelled-input">
                {/* <label htmlFor="userimage">Upload an image</label> */}
                <Input
                  style={{ background: 'gray' }}
                  type="file"
                  name="choose file"
                />
              </section>
              <small>
                <b>*</b> Maximum upload 1mb
              </small>
            </>
          )}
          {description && <p> {description} </p>}
        </article>
        <footer>
          {/* <menu>
            <button type="reset" value="clear">
              Clear
            </button>
          </menu> */}
          <menu>
            <Button onClick={closeModal} color="light" radius="xs">
              Cancel
            </Button>
            <Button
              radius="xs"
              color="danger"
              onClick={() => console.log('Clicked : Delete')}
            >
              Delete
            </Button>
          </menu>
        </footer>
      </form>
    </dialog>
  );
};
