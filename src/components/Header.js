const Header = ({toggleModal}) => (
  <header>
    <span className='heading'>Team Members</span>
    <button className='close_button' onClick={toggleModal}>
      Add Members +
    </button>
  </header>
);

export default Header;
