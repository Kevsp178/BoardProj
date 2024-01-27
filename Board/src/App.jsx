import "./App.css";
import picture from "./img/helle.jpg";
import pic1 from "./img/talkt.jpg";
import title from "./img/coral.jpg";
import pic2 from "./img/Phat.jpeg";
import pic3 from "./img/embar.jpeg";
import pic4 from "./img/China.jpg";
import pic5 from "./img/ind.jpeg";
import pic6 from "./img/too.jpg";
import pic7 from "./img/balc.jpeg";
import pic8 from "./img/pastel.jpg";
import pic9 from "./img/itl.jpg";

const App = () => {
  return (
    <div className='App'>
      <img src={title} className='Title' alt=''></img>
      <h1 className='head'>Diverse restaurants in Coral Springs</h1>
      <h2>We take pride in the diversity of our community</h2>
      <div className='Restaurants'>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td className='restaurant'>
                <img src={picture} className='image' alt=''></img>
                <div className='style'>
                  <p>
                    <b>Hellenic Republic</b>
                  </p>
                  <p>Greek </p>
                  <button
                    className='btn'
                    onClick={() => {
                      window.location.href =
                        "https://www.thehellenicrepublic.com/#22";
                    }}>
                    View Menu
                  </button>
                </div>
              </td>
              <td className='restaurant'>
                <img src={pic1} className='image' alt=''></img>
                <div className='style'>
                  <p>
                    <b>Talkin' Tacos Coral Springs</b>
                  </p>
                  <p>Mexican</p>
                  <button
                    className='btn'
                    onClick={() => {
                      window.location.href = "https://talkintacos.net/menu";
                    }}>
                    View Menu
                  </button>
                </div>
              </td>
              <td className='restaurant'>
                <img src={pic2} className='image' alt=''></img>
                <div className='style'>
                  <p>
                    <b>Phat Boy Sushi, Kitchen & Bar</b>
                  </p>
                  <p>Asian</p>
                  <button
                    className='btn'
                    onClick={() => {
                      window.location.href = "https://phatboysushi.com/menu/";
                    }}>
                    View Menu
                  </button>
                </div>
              </td>
              <td className='restaurant'>
                <img src={pic3} className='image' alt=''></img>
                <div className='style'>
                  <p>
                    <b>Embarcadero 41</b>
                  </p>
                  <p>Peruvian</p>
                  <button
                    className='btn'
                    onClick={() => {
                      window.location.href =
                        "https://www.embarcadero41.us/menu-coral-springs";
                    }}>
                    View Menu
                  </button>
                </div>
              </td>
              <td className='restaurant'>
                <img src={pic4} className='image' alt=''></img>
                <div className='style'>
                  <p>
                    <b>Mainland China Bistro</b>
                  </p>
                  <p>Chinesse</p>
                  <button
                    className='btn'
                    onClick={() => {
                      window.location.href =
                        "http://www.mainlandchinabistro.com/";
                    }}>
                    View Menu
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className='restaurant'>
                <img src={pic5} className='image' alt=''></img>
                <div className='style'>
                  <p>
                    <b>Honest Indian Vegetarian Restaurant</b>
                  </p>
                  <p>Indian</p>
                  <button
                    className='btn'
                    onClick={() => {
                      window.location.href =
                        "http://honestindianrestaurant.com/";
                    }}>
                    View Menu
                  </button>
                </div>
              </td>
              <td className='restaurant'>
                <img src={pic6} className='image' alt=''></img>
                <div className='style'>
                  <p>
                    <b>TooJay’s Deli • Bakery • Restaurant</b>
                  </p>
                  <p>American</p>
                  <button
                    className='btn'
                    onClick={() => {
                      window.location.href =
                        "https://www.toojays.com/?utm_source=yext&utm_campaign=TOOJAYS_YEXTLISTING&utm_medium=organic&y_source=1_MjUxNjMzNTktNzE1LWxvY2F0aW9uLndlYnNpdGU%3D";
                    }}>
                    View Menu
                  </button>
                </div>
              </td>
              <td className='restaurant'>
                <img src={pic7} className='image' alt=''></img>
                <div className='style'>
                  <p>
                    <b>El Balcón de las Américas</b>
                  </p>
                  <p>Colombian</p>
                  <button
                    className='btn'
                    onClick={() => {
                      window.location.href =
                        "http://www.elbalcondelasamericas.com/?utm_source=google&utm_medium=business_card&utm_campaign=coral_springs";
                    }}>
                    View Menu
                  </button>
                </div>
              </td>
              <td className='restaurant'>
                <img src={pic8} className='image' alt=''></img>
                <div className='style'>
                  <p>
                    <b>Casa do Pastel</b>
                  </p>
                  <p>Brazilia</p>
                  <button
                    className='btn'
                    onClick={() => {
                      window.location.href = "http://www.casadopastelusa.com/";
                    }}>
                    View Menu
                  </button>
                </div>
              </td>
              <td className='restaurant'>
                <img src={pic9} className='image' alt=''></img>
                <div className='style'>
                  <p>
                    <b>Carrabba's Italian Grill</b>
                  </p>
                  <p>Italian</p>
                  <button
                    className='btn'
                    onClick={() => {
                      window.location.href =
                        "https://www.carrabbas.com/menu?y_source=1_MTU1MDMwODEtNzE1LWxvY2F0aW9uLm1lbnVfdXJs";
                    }}>
                    View Menu
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
