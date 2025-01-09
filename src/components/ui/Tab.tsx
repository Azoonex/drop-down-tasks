import React from "react";

interface TypeTabs  {
    id : number,
    name: string,
    info : string,
}

interface TypeTabTrigger {
    id : number,
    name: string,
    info : string,
    setActiveTab : ()=>void,
}


function TabContainer(){
    const tabs:TypeTabs[] = [
        {id : 1, name: "Home",info: "this is home is bast home for game and develop web sit"},
        {id : 2, name: "phone",info: "this is about phone"},
        {id : 3, name: "email",info: "this is about email"},
    ]

    const [activeTab,setActiveTab] = React.useState<number>(1);
    const filteredItems = tabs.filter(item => item.id === activeTab)
    return <div className={`tab-container`}>
        <div className="tab-container__wrapper">
            {
                tabs.map((tab) => {
                    return <TabTrigger  key={tab.id} {...tab} setActiveTab={setActiveTab} />;
                })
            }
        </div>
        {
            filteredItems[0].info
        }
    </div>
}

function TabContent (){
    return <div className={`tab-content`}>

    </div>
}


function TabTrigger(props:TypeTabTrigger){
    const {name,setActiveTab,id} = props
    return <button onClick={()=> setActiveTab(id)}>
        {name}
    </button>
}

export {
    TabContent,
    TabTrigger,
    TabContainer
}