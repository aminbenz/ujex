import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { IoTrashBinOutline } from 'react-icons/io5';
import { Button } from '../..';

interface AlertProps {
  show: boolean;
  title: string;
  description: string;
}

export const Alert = ({ show, title, description }: AlertProps) => {
  const [isOpen, setIsOpen] = useState(show);

  // close when click ouside
  const handleAlertModal = (e: any) => {
    const body = e.target.classList.contains('alert-card');
    if (body) return setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
      <Button color="purple" onClick={openModal}>
        Open Modal
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.dialog
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e: any) => handleAlertModal(e)}
            className={`alert-card ${isOpen && 'active'}`}
          >
            <motion.form
              method="dialog"
              action=""
              variants={dropIn}
              className="alert-card-container"
            >
              <div className="header">
                <IoTrashBinOutline />
              </div>
              <div className="content">
                <h4 className="title">{title}</h4>
                <p className="desc">{description}</p>
                <div className="btns-container">
                  <Button onClick={closeModal} color="light" radius="xs">
                    Cancel
                  </Button>
                  <Button radius="xs" color="danger">
                    Delete
                  </Button>
                </div>
              </div>
            </motion.form>
          </motion.dialog>
        )}
      </AnimatePresence>
    </>
  );
};
