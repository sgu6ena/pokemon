import {NextPage} from "next";
import {arealAPI} from "../../../src/api/admin/areals/ArealService";

const ArealsPage: NextPage = () => {
    const {data:areals, isLoading} = arealAPI.useFetchAllArealsQuery()

    return (
        <div>
            {isLoading&& <p>Loding...</p>}
               <div>{areals?.length > 0 && areals.map(areal => <p>{areal.title}</p>)}</div>
        </div>

    );
};

export default ArealsPage;
