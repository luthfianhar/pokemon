
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layoutspokemon = (Props) => {
    return (
        <>
            <Navbar />
                {Props.children}
            <Footer />
        </>
    );
};

export default Layoutspokemon;