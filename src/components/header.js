const Header = () => {

    var headerData = [
        {
            "title": "Bag"
        },
        {
            "title": "Watch"
        },
        {
            "title": "Camera"
        },
        {
            "title": "Lagguge"
        },
        {
            "title": "Home"
        },
        {
            "title": "Others"
        },
    ]

    return (
        <div>
            <div>This is header</div>

            <div className="flex flex-row">
                {
                    headerData.map(m => {
                        return <HeaderMenu menus={m}/>
                    })
                }
            </div>

        </div>
    );
}


const HeaderMenu = (props) =>{
    return (
        <div className="bg-slate-100 text-sm font-bold mx-1 px-6 py-2 hover:cursor-pointer">
            {props.menus.title}
        </div>
    )
}

export default Header;