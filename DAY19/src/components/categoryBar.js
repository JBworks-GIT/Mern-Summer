import { RxHamburgerMenu } from "react-icons/rx";
const CategoryBar = (props) =>{
    const {categories} = props;
    return(
        <div className="homepage-category-bar">
        <button>
          <RxHamburgerMenu /> All
        </button>
        <div className="category-name">
          {/* {categories.forEach((elem)=>{
                    return <p>{elem}</p>; //does not return
                })}         */}
          {categories.map((elem) => {
            return <p key={elem}>{elem}</p>; //map does return
          })}
        </div>
      </div>
    )
}
export default CategoryBar;