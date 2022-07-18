import React from "react";
import { Loading } from "../components/Loading";
import { Spinner } from "../components/Spinner";

function Loader() {
    return (
        <React.Fragment>
            <Loading>
              <Spinner/>
            </Loading>
        </React.Fragment>
    )
}

export { Loader }