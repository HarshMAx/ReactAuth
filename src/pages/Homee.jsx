import '../pagesstyle/Homestyle.css'

const Homee = () => {
  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div className="home">
      <button className='logout' onClick={logout}>Log out</button>
    </div>
    
  );
};

export default Homee;
