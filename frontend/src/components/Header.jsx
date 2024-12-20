import { IoPerson } from "react-icons/io5";
import { BiHappyHeartEyes } from "react-icons/bi";
import { BsHandbagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { searchActions } from "../store/searchSlice";
import BackgroundColor from "./BackgroundColor";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const wishlist = useSelector((store) => store.wishlist);
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);

  const input = useRef();
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchItem = () => {
    const searchInput = input.current.value;
    dispatch(searchActions.handleSearch(searchInput));
    
  };

  const toggleColorMode = () => {
    setColor((prevColor) => !prevColor);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color ? "#333" : "#fff";
    document.body.style.color = color ? "#fff" : "#000";
  }, [color]);

  return (
    <>
      <header className="header">
        <div className="first">
          <div className="logo_container">
            <Link to="/">
              <img
                className="myntra_home"
                src="images/myntra_logo.webp"
                alt="Myntra Home"
              />
            </Link>
          </div>
          <nav className="nav_bar">
            <Link to="#">Men</Link>
            <Link to="#">Women</Link>
            <Link to="#">Kids</Link>
            <Link to="#">Home & Living</Link>
            <Link to="#">Beauty</Link>
            <Link to="#">
              Studio <sup>New</sup>
            </Link>
          </nav>
          <div className="search_bar">
            <input
              className="search_input"
              placeholder="Search for products, brands and more"
              ref={input}
              onChange={handleSearchItem}
            />
          </div>
          <div className="action_bar">
            <Link className="action_container action-con">
              <span>
                <IoPerson />
              </span>
              <span className="action_name">Profile</span>
            </Link>
            <Link className="action_container" to="wishlist">
              <span>
                <BiHappyHeartEyes />
              </span>
              <span className="action_name">Wishlist</span>
              <span className="bag-item-count">{wishlist.length}</span>
            </Link>
            <Link className="action_container" to="bag">
              <span>
                <BsHandbagFill />
              </span>
              <span className="action_name">Bag</span>
              <span className="bag-item-count">{bag.length}</span>
            </Link>
            <div onClick={toggleColorMode}>
              <BackgroundColor color={color} />
            </div>
          </div>
          <button className="hamburger" onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
        {isOpen && (
          <div className="second">
            <div className="hidden-sm custom-button">
              <button className="close-button" onClick={toggleMenu}>
                &times;
              </button>
              <div className="flex-column">
                <Link to="#" onClick={toggleMenu} className="link">
                  Profile
                </Link>
                <Link to="wishlist" onClick={toggleMenu} className="link">
                  Wishlist
                </Link>
                <Link to="bag" onClick={toggleMenu} className="link">
                  Bag
                </Link>
                <Link to="#" onClick={toggleMenu} className="link">
                  Men
                </Link>
                <Link to="#" onClick={toggleMenu} className="link">
                  Women
                </Link>
                <Link to="#" onClick={toggleMenu} className="link">
                  Kids
                </Link>
                <Link to="#" onClick={toggleMenu} className="link">
                  Beauty
                </Link>
                <Link to="#" onClick={toggleMenu} className="link">
                  Studio<sup>New</sup>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
