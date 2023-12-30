import Image from "../images/values.jpg"
import SectionHead from "../Components/SectionHead"
import { IoDiamondSharp } from "react-icons/io5";
import { values } from "../data"
import Card from "../UI/Card"

const Values = () => {
  return (
    <section className="values">
        <div className="container values_container">
            <div className="values_left">
                <img src={Image} alt="Values" className="values_image"/>
            </div>
            <div className="values_right">
                <SectionHead icon={<IoDiamondSharp/>} title="Values"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="values_wrapper">
                    {
                        values.map(({id, icon, title, desc}) =>{
                            return <Card key={id} className="values_value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values