import "./App.css";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";

const user = {
  name: "Daraz Online Shopping",
  bio: "Web Developer | Tech Enthusiast",
  profilePicture: "https://via.placeholder.com/100",
  coverImage:
    "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/468035682_977360337766081_3452672169452315533_n.png?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGOdUF73lnOOaq3GQAIl6sfjC-yZdbx9A-ML7Jl1vH0D39ZYppKOkBPkXnj9LiJdwc-vVBOmDdhnJ3400pOT3ut&_nc_ohc=evaG-HkWHR0Q7kNvgFDAqVN&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=AEtIUEZyjl7j2h_P2cbj912&oh=00_AYAYr_2Pxddpj5gb36OfIrCXtFogDw03FB-dIfzQCasGiQ&oe=67478253",
  details: "Loves coding, traveling, and photography.",
};

function App() {
  return (
    <>
      <NavBar />
      <Main user={user} />
    </>
  );
}

export default App;
