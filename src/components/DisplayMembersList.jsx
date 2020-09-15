import React from "react";
import Axios from "axios";

let DisplayMembersList = ({ membersList }) => {
	const deleteMember = (id) => {
		Axios.delete(`http://localhost:3001/api/deleteMember/${id}`);
	};

	return (
		<div className="displayMembersList">
			<h3 className="m-4 p-3 font-italic text-success">Liste de l'équipage</h3>
			<div className=" container-fluid row">
				{membersList.map((memberList) => {
					return (
						<div
							className="col-lg-4 col-md-6  col-sm-12 p-3"
							key={memberList.id}
						>
							<div className="card border border-success rounded-right rounded-bottom pt-3">
								<h5>{memberList.name}</h5>
								<p>{memberList.quality}</p>
								{!memberList.quality && <br />}

								<div className="d-inline-block justify-content-center">
									<button
										onClick={() =>
											deleteMember(memberList.id)
										}
										type="button"
										className="btn btn-danger w-10 m-4"
									>
										Delete
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DisplayMembersList;
