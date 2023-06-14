import React from "react";
import { Link } from "react-router-dom";

const Carts = () => {
    return (
        <>
            <div className="container-fluid text-center">
                <table className="table table-bordered border border-3 border-primary table-striped table-hover align-middle">
                    <tr>
                        <td>S.no</td>
                        <td>Product Name</td>
                        <td>Product Image</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>Action</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Dell</td>
                        <td>
                            <img
                                src="https://imgs.search.brave.com/I889g6gaXTxyFssvP-VHCLtY33Jfkds78E4UzvZyD4o/rs:fit:595:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/RVpSSEdSMExnTDJJ/V2NRNTExVGtRSGFG/NSZwaWQ9QXBp"
                                height="120px"
                                alt="..."
                            />
                        </td>
                        <td>2</td>
                        <td>Nrs.2,30,000</td>
                        <td>
                            <Link
                                href=""
                                className="btn btn-primary"
                                onClick={() => {
                                    window.confirm("Are you sure");
                                }}
                            >
                                <i className="bx bx-edit"></i>
                            </Link>
                            <Link
                                href=""
                                className="btn btn-danger"
                                onClick={() => {
                                    window.confirm("Are you sure");
                                }}
                            >
                                <i className="bx bx-trash"></i>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Dell</td>
                        <td>
                            <img
                                src="https://imgs.search.brave.com/I889g6gaXTxyFssvP-VHCLtY33Jfkds78E4UzvZyD4o/rs:fit:595:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/RVpSSEdSMExnTDJJ/V2NRNTExVGtRSGFG/NSZwaWQ9QXBp"
                                height="120px"
                                alt="..."
                            />
                        </td>
                        <td>2</td>
                        <td>Nrs.2,30,000</td>
                        <td>
                            <Link
                                href=""
                                className="btn btn-primary"
                                onClick={() => {
                                    window.confirm("Are you sure");
                                }}
                            >
                                <i className="bx bx-edit"></i>
                            </Link>
                            <Link
                                href=""
                                className="btn btn-danger"
                                onClick={() => {
                                    window.confirm("Are you sure");
                                }}
                            >
                                <i className="bx bx-trash"></i>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Dell</td>
                        <td>
                            <img
                                src="https://imgs.search.brave.com/I889g6gaXTxyFssvP-VHCLtY33Jfkds78E4UzvZyD4o/rs:fit:595:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/RVpSSEdSMExnTDJJ/V2NRNTExVGtRSGFG/NSZwaWQ9QXBp"
                                height="120px"
                                alt="..."
                            />
                        </td>
                        <td>2</td>
                        <td>Nrs.2,30,000</td>
                        <td>
                            <Link
                                href=""
                                className="btn btn-primary"
                                onClick={() => {
                                    window.confirm("Are you sure");
                                }}
                            >
                                <i className="bx bx-edit"></i>
                            </Link>
                            <Link
                                href=""
                                className="btn btn-danger"
                                onClick={() => {
                                    window.confirm("Are you sure");
                                }}
                            >
                                <i className="bx bx-trash"></i>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Dell</td>
                        <td>
                            <img
                                src="https://imgs.search.brave.com/I889g6gaXTxyFssvP-VHCLtY33Jfkds78E4UzvZyD4o/rs:fit:595:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/RVpSSEdSMExnTDJJ/V2NRNTExVGtRSGFG/NSZwaWQ9QXBp"
                                height="120px"
                                alt="..."
                            />
                        </td>
                        <td>2</td>
                        <td>Nrs.2,30,000</td>
                        <td>
                            <Link
                                href=""
                                className="btn btn-primary"
                                onClick={() => {
                                    window.confirm("Are you sure");
                                }}
                            >
                                <i className="bx bx-edit"></i>
                            </Link>
                            <Link
                                href=""
                                className="btn btn-danger"
                                onClick={() => {
                                    window.confirm("Are you sure");
                                }}
                            >
                                <i className="bx bx-trash"></i>
                            </Link>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    );
};

export default Carts;
