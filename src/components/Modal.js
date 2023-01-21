
import Mod from "../assets/modal.jpg";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src={Mod} alt='/' />
        <div className='modalRight'>
          <button className='closeBtn' onClick={onClose}>
            X
          </button>
          <div className='content'>
            <h3>Win an all expenses paid trip by entering this giveaway</h3>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary' onClick={()=>{ alert('Follow our website for winner announcement');}} >
              <span className='bold'>YES,</span> can't wait!
            </button>
            <button className='btnOutline'  onClick={onClose}>
              <span className='bold'>NO</span>, some other time
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;