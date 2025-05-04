import { configureStore } from "@reduxjs/toolkit";
import RcCompletionReducer from "../Store/RcCompletionSlice";  
import RechartReducer from "./RechartSlice";
import WeightReducer from "./WeightSlice";
import ScatterReducer from "./ScatterSlice";
import TaskReducer from "./TaskSlicer";
import WeightChartReducer from "./WeightChartSlice";
import WeightStackReducer from "./WeightStack";
import HamReducer from "./Hamburger";
import AuthReducer from "./AuthSlice";
import farmerDashboardReducer from "./farmerDashboardSlice";
import farmerGraphReducer from "./farmerGraphSlice";
import shopkeeperReducer from "./shopkeeperSlice";
import addProductReducer from "./addProductSlice ";
import taskTrackerReducer from "./taskTrackerSlice";

const store = configureStore({
  reducer: {   
    RecentCompletion: RcCompletionReducer,
    Rechart: RechartReducer,
    WeightData: WeightReducer,
    ScatterData: ScatterReducer,
    TaskData: TaskReducer,
    WeightChartData: WeightChartReducer,
    WeightStackData: WeightStackReducer,
    HamData: HamReducer,
    User: AuthReducer,
    farmerDashboard: farmerDashboardReducer,
    farmerGraph: farmerGraphReducer,
    shopkeeper: shopkeeperReducer,
    addProduct: addProductReducer,
    taskTracker: taskTrackerReducer,
  }
});

export default store;
