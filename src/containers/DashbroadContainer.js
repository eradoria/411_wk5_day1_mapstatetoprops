// import { Dashboard } from "@mui/icons-material";
import { connect } from "react-redux";
import  Dashboard  from "../components/Dashboard";
import state from "../redux/state";

const mapStateToProps = (state) => {
    return{
        cars : state.cars,
        user: state.user.username
    }
}

export default connect(mapStateToProps)(Dashboard)