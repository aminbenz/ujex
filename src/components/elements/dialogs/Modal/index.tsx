import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { IoCloseOutline, IoImagesOutline } from 'react-icons/io5';

import { Button, CheckBox, Input } from '../../../../components';
import { selectImageFile } from '../../../../helper';
import { Spotify } from '../../../../lib/spotify';

interface ModalProps {
  show: boolean;
  title?: string;
  openModal?: string;
  type?: 'create' | 'edit';
  name?: string;
  description?: string;
  public?: boolean;
  image?: string;
}

export const Modal = ({
  show,
  title,
  type = 'create',
  getFormData,
  // closeModal,
  openModal,
}: ModalProps) => {
  const [open, setOpen] = useState(show);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    public: false,
    image: '',
  });
  const inputRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    // if (type === 'edit') setFormData(data);
  }, [type]);

  // const getFormData = () => {
  //   return {
  //     name: form.get('name'),
  //     description: form.get('description'),
  //     public: form.get('status'),
  //     image: form.get('image'),
  //   };
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData(e.target as HTMLFormElement);

    if (!form.get('name')) return;

    if (type === 'create') {
      // Create a private playlist
      Spotify.createPlaylist(form.get('name'), {
        description: form.get('description'),
        public: true,
      }).then(
        function (data) {
          console.log('Created playlist!');
        },
        function (err) {
          console.log('Something went wrong!', err);
        }
      );

      closeModal();
    } else if (type === 'edit') {
      closeModal();
    } else {
      // displayAlert(true, 'please fill data', 'danger');
    }
  };

  // reset modal content
  const setDefault = () => {
    setFormData({
      name: '',
      description: '',
      image: '',
      public: true,
    });
  };

  const closeModal = () => {
    setDefault();
    setOpen(false);
  };

  let clickOutsideModal = () => {
    if (dialogRef?.current.target.classList.contains('popup')) {
      closeModal();
    }
  };

  // handle upload file image (only)
  const selectImage = (e: any) => {
    if (e.target.classList.contains('remove-image')) {
      setFormData({ ...formData, image: '' });
      return;
    }
    const image = selectImageFile(inputRef);
    setFormData({ ...formData, image: image });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.dialog
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0 }}
          className={`form-dialog`}
          onClick={clickOutsideModal}
          ref={dialogRef}
        >
          <motion.div
            initial={{ y: '-100vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '200vh', opacity: 0 }}
            transition={{
              duration: 0.1,
              type: 'spring',
              damping: 25,
              stiffness: 500,
            }}
            className={`form-dialog-container`}
          >
            <div className="center">
              <h4 className="title">{title || type}</h4>
              <button className="icon" title="Close" onClick={closeModal}>
                <IoCloseOutline />
              </button>
            </div>
            {/* {alert.show && <Alert removeAlert={displayAlert} {...alert} />} */}
            <form method="dialog" onSubmit={handleSubmit}>
              <div className="img-container" onClick={(e) => selectImage(e)}>
                {/* Choose Image */}
                {formData.image && (
                  <>
                    <Image
                      height={210}
                      width={210}
                      src={formData.image}
                      alt={`playlist ${formData.name}`}
                    />
                    <button
                      onClick={() => setFormData({ ...formData, image: '' })}
                      className="icon remove-image"
                      title="Remove Image"
                      aria-label="remove-selected-image"
                    >
                      <IoCloseOutline />
                    </button>
                  </>
                )}
                <IoImagesOutline className="bunner" />
                <span className="msg">Choose image</span>
                <input
                  name="image"
                  ref={inputRef}
                  onChange={selectImage}
                  type="file"
                  accept="image/*"
                  hidden
                />
              </div>
              {/* right Inputs */}
              <div className="right">
                <Input
                  name="name"
                  required={true}
                  minLength={3}
                  maxLength={30}
                  label="name"
                  placeholder="My Playlist #name.."
                />
                <Input
                  name="description"
                  label="description"
                  placeholder="Give your playlist descreption."
                  type="textarea"
                  height={115}

                  // rows={4}
                  // cols={50}
                />
                <CheckBox
                  name="status"
                  description="your playlist staus it's"
                  check={true}
                />
                <Button
                  size="sm"
                  type="submit"
                  style={{ padding: '6px', width: 120 }}
                >
                  {type === 'edit' ? 'Edit' : 'Create'}
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};
