const useOutsideClick = (ref, callback) => {
  document.addEventListener('click', handleClick);

  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  
  return () => {
    document.removeEventListener('click', handleClick);
  };
};

export default useOutsideClick;

// useEffect(() => {
//  document.addEventListener('click', handleClick);
//  return () => {
//     document.removeEventListener('click', handleClick);
//  };
//     
//});
