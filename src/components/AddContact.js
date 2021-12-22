import Modal from "react-modal";

const AddContact = ({
  handlerAddFormSubmit,
  toggleModal,
  handlerFormChange,
  modalIsOpen,
}) => (
  <Modal
    ariaHideApp={false}
    isOpen={modalIsOpen}
    className="custom-modal-style"
  >
    <div className="modalBackground">
      <div className="modalContainer">
        <form className="display_form" onSubmit={handlerAddFormSubmit}>
          <div className="display_header">
            <span className="header">Add Members</span>
            <button className="cross_button" onClick={toggleModal}>
              X
            </button>
          </div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            required="required"
            onChange={handlerFormChange}
          />
          <label>Company</label>
          <input
            type="text"
            name="company"
            required="required"
            onChange={handlerFormChange}
          />
          <label>Status</label>
          <select
            required="required"
            name="status"
            onChange={handlerFormChange}
          >
            <option value="active">Active</option>
            <option value="closed">Closed</option>
          </select>
          <label>Notes</label>
          <input
            type="text"
            name="notes"
            required="required"
            onChange={handlerFormChange}
          />
          <div className="footer">
            <button className="form_button" onClick={toggleModal}>
              Cancel
            </button>
            <button className="form_button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </Modal>
);

export default AddContact;
