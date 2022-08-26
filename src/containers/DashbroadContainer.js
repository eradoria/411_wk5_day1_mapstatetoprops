// import { Dashboard } from "@mui/icons-material";
import { connect } from "react-redux";
import  Dashboard  from "../components/Dashboard";
import state from "../redux/state";

const mapStateToProps = (state) => {
    return{
        cars : state.cars
    }
}

export default connect(mapStateToProps)(Dashboard)