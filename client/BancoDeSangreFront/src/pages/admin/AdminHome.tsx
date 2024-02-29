import { useSelector } from "react-redux";
import Layout from "../../components/shared/Layout/Layout"
import { RootState } from "../../redux/store";
type user = {
    _id: string;
    email: string;
    name: string;
    role: string;
    hospitalName: string;
    organizationName: string;
  }
const AdminHome = () => {
    const user = useSelector<RootState, user>((state) => state.auth.user)
    return (
    <Layout>
        <div className="container">
            <div className="d-flex flex-column mt-4">
                <h1>
                    Welcome Admin <i className="text-success">{user?.name}</i>
                </h1>
                <h1>
                    Manage Blood Bank App
                </h1>
                <hr />
                <p>Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. 
                    Qui aliquam placeat maxime sequi n
                    eque incidunt, ea recusandae sunt rerum esse nisi ullam amet atque eius harum non, 
                    alias magnam! Aspernatur repellat excepturi dolore ea soluta iste ipsam est eum 
                    veritatis delectus eius iusto culpa possimus corporis, similique saepe placeat neque. 
                    Fugit commodi debitis ipsa pariatur iure consequatur repudiandae, molestias expedita magni, 
                    cumque ducimus ex aliquam aspernatur magnam dolor necessitatibus voluptates labore neque minus 
                    cupiditate illum perferendis alias illo ab. Obcaecati similique nihil adipisci optio, minima quam reiciendis cupiditate laudantium earum rem culpa, voluptas officiis aliquid unde ex sed libero vitae in veritatis fugiat! Ullam facilis laborum necessitatibus eaque fuga libero, sit, cupiditate, suscipit mollitia quae animi nulla eum. Eaque nulla libero obcaecati, quia repellendus quasi eos autem molestias doloremque illum. Provident, quos! Placeat reprehenderit distinctio saepe voluptatum mollitia quaerat, laudantium asperiores recusandae quis voluptas harum dolorem cupiditate rerum quo accusantium fugiat nobis quos. Odit soluta tempora impedit quasi repudiandae esse quam quidem odio deserunt nesciunt necessitatibus dicta modi, possimus, sed mollitia nostrum corrupti nihil cum minima? Temporibus soluta amet quasi veritatis optio nesciunt, quis adipisci vel, numquam ea sequi! Rerum qui mollitia ullam impedit facilis, doloremque consequuntur repudiandae quasi ad!</p>
            </div> 
        </div>
    </Layout>
  )
}

export default AdminHome