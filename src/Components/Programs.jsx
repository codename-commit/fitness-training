import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";
import { programs } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";


const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs_container">
            <SectionHead icon={<FaCrown/>} title="Programs"/>
        
        <div className="programs_wrapper">
            {
                programs.map((program) => { 
                  console.log("programs_wrapper", program)
                    return (
                 
                      //GETTING A "Objects are not valid as a React child (found: object with keys {}). If you meant to render a collection of childreN use an array instead" error when using Card comp
                        <Card className="programs_program" key={program.id}>
                             <span>{program.icon}</span>
                             <h4>{program.title}</h4>
                            <small>{program.info}</small>
                            <Link to={program.path} className="btn sm">Learn More<AiFillCaretRight/></Link>
                        </Card>

                        
                    )
                })
            }
        </div>
        </div>
    </section>
  )
}

export default Programs