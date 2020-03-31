export const handleClick = (e) => {
  if (!areAllFound) {
    const bounds = document.getElementById('waldoScene').getBoundingClientRect();
    setPosX(e.clientX - bounds.left);
    setPosY(e.clientY - bounds.top);
    setIsBoxActive(prevState => !prevState);
  }
};


