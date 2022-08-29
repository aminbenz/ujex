// react
import { useState } from 'react';
// animation
import { AnimatePresence, motion } from 'framer-motion';
// icons
import { IoTrashBinOutline } from 'react-icons/io5';
// components
import { Button } from '../../..';

// alerProps
interface AlertProps {
  show: boolean;
  title: string;
  description?: string;
  type?: 'warning' | 'success' | 'error';
}

export const Alert: React.FC<AlertProps> = ({
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
  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // close Dialog
  const closeModal = () => {
    setIsOpen(false);
  };

  // animation props
  const container = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const dropIn = {
    initial: { y: '-100vh' },
    animate: {
      y: 0,
      transition: { type: 'spring', stiffness: 300 },
    },
    exit: {
      y: '100vh',
    },
  };

  // type: "spring",
  // stiffness: 700,
  // damping: 30

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.dialog
            modal-mode="mega"
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e: any) => handleAlertModal(e)}
            className={`alert-dialog ${isOpen && 'active'}`}
          >
            <motion.form
              method="dialog"
              variants={dropIn}
              className="alert-dialog-container"
            >
              {type === 'warning' && (
                <div className="header">
                  <IoTrashBinOutline />
                </div>
              )}
              <div className="content">
                <h4 className="title">{title || type}</h4>
                <p className="desc">{description}</p>
                <footer className="btns-container">
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
                </footer>
              </div>
            </motion.form>
          </motion.dialog>
        )}
      </AnimatePresence>
    </>
  );
};
