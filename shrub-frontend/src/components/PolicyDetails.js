import { useParams } from "react-router-dom";
// TODO implement fetch
import useFetch from "../useFetch";
import { useHistory } from "react-router-dom";

const PolicyDetails = () => {
    const history = useHistory();

    const {id} = useParams();
    const {data: policy, error, isPending } = useFetch("http://localhost:8000/policies/" + id);

    //TODO render actual policy details
    return (
        <div>
            { isPending && <div>Loading...</div>}
            { error && <div> {error} </div>}
            { policy && <div>
                <h2>{policy.location}</h2>
                <p>Magnitude: {policy.magnitude}</p>
            </div>}
        </div>
      );
}
 
export default PolicyDetails;