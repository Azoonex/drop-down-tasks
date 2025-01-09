import "../src/assets/dropdown.style.scss";
import "../src/assets/home.style.scss";
import DropDownDemo from "./components/DropDown-demo";
import {TabContainer} from "./components/ui/Tab.tsx";

("./components/drop-down");

function App() {
    const data = [
        { id: 1, label: "education 👓" },
        { id: 2, label: "yeeeah,science! 🎈" },
        { id: 3, label: "Art 🎭" },
        { id: 4, label: "sport 🏐" },
        { id: 5, label: "game  🎮" },
        { id: 6, label: "health  🎞" },
        { id: 7, label: "watch 📺" },
        { id: 8, label: "swim 🏊‍♂️" },
    ];

    return (
        <>
        <TabContainer />

        <section className='container'>
            <DropDownDemo data={data} />

        </section>
        </>
    );
}

export default App;
