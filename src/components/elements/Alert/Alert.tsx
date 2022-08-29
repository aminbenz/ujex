import { useEffect, useState } from 'react';
// import './styles/styles.css';

interface AlertProps {
  show: boolean;
  msg: string;
  type?: string;
  removeAlert?: any;
}

export function Alert({ show, msg, type }: AlertProps) {
  const [alert, setAlert] = useState<AlertProps | null>(null);

  const displayAlert = (show = false, msg = '', type = '') => {
    if (!show && !msg && !type) {
      setAlert(null);
    } else {
      setAlert({ show, msg, type });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      displayAlert();
    }, 3000);
    return () => clearInterval(timeout);
  }, []);

  return (
    <div className={`alert alert-${alert?.type} ${alert?.show && 'active'}`}>
      <h5 className="title">{alert?.msg}</h5>
    </div>
  );
}
