import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { IoCloseOutline, IoImagesOutline } from 'react-icons/io5';

import { Button, Input } from '../../../../components';
import { selectImageFile } from '../../../../helpers';

interface Props {
  name?: string;
  description?: string;
  public?: boolean;
  image?: any;
}

interface ModalProps {
  show?: boolean;
  title?: string;
  closeModal?: any;
  isEditModal?: boolean;
  setIsEditModal?: any;
  type?: 'create' | 'edit';
  data: Props;
}

export const Modal = ({ show, title, data, isEditModal, type }: ModalProps) => {
  const [open, setOpen] = useState(show);
  const [formData, setFormData] = useState<Props>({
    name: '',
    description: '',
    public: false,
    image: '',
  });
  const inputRef = useRef(null);

  // if is "Edit" so set Selected formData Data

  // formData SUBMIT
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // if formData name Existing and isedit "false" => "CREATE"
    if (formData.name && !isEditModal) {
      closeModal();
    }

    // if formData name Existing and isedit "true" => "EDIT"
    else if (formData.name && isEditModal) {
      closeModal();
    }

    // if formData name "not" Existing display alert
    else {
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

  let closeModalWhenClickOuteSide = (e: any) => {
    if (e.target.classList.contains('popup')) {
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

  useEffect(() => {
    if (isEditModal || type === 'edit') setFormData(data);
  }, [isEditModal, type, data]);

  return (
    <AnimatePresence>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      {open && (
        <motion.dialog
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0 }}
          className={`form-dialog`}
          onClick={closeModalWhenClickOuteSide}
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
              <h4 className="title">{title || type || 'Change Me'}</h4>
              <button className="icon" title="Close" onClick={closeModal}>
                <IoCloseOutline />
              </button>
            </div>
            {/* {alert.show && <Alert removeAlert={displayAlert} {...alert} />} */}
            <form method="dialog" onSubmit={handleSubmit}>
              <div className="img-container" onClick={(e) => selectImage(e)}>
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
                  ref={inputRef}
                  onChange={selectImage}
                  type="file"
                  accept="image/*"
                  hidden
                />
              </div>

              <div className="right">
                <Input
                  required={true}
                  minLength={3}
                  maxLength={30}
                  label="name"
                  placeholder="My Playlist #name.."
                  value={formData.name}
                  onChange={(e: any) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                />
                <Input
                  label="description"
                  placeholder="Give your playlist descreption."
                  type="textarea"
                  value={formData.description}
                  height={115}
                  onChange={(e: any) => {
                    setFormData({ ...formData, description: e.target.value });
                  }}
                  // rows={4}
                  // cols={50}
                />
                {/* <CheckBox description="your playlist staus it's" check={true} /> */}
                <Button size="sm" style={{ padding: '6px', width: 120 }}>
                  {isEditModal ? 'Edit' : 'Create'}
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};
