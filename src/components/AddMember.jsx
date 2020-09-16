import React, { useState, useEffect } from "react";
import Axios from "axios";
import DisplayMembersList from "./DisplayMembersList";

let AddMember = () => {
	const [member, setMember] = useState("");
	const [quality, setQuality] = useState("");
	const [membersList, setMembersList] = useState([]);

	useEffect(() => {
		Axios.get("http://localhost:3001/api/getMembers").then((response) => {
			setMembersList(response.data);
		});
	}, []);

	const submitNewMember = () => {
		Axios.post("http://localhost:3001/api/newMember", {
			name: member,
			quality: quality,
		});

		setMembersList([...membersList, { name: member, quality: quality }]);
	};

	return (
		<div className="container-fluid d-flex flex-column justify-content-center align-items-center">
			<h4 className="font-weight-bold font-italic text-primary m-4 ">
				Ajouter un (e) Argonaute
			</h4>
			<form
				onSubmit={submitNewMember}
				className="member d-flex flex-column m-4"
			>
				<div className="form-group m-2">
					<label
						htmlFor="inputNameArgonaute"
						className="d-inline-flex text-primary font-weight-bold"
					>
						Nom de l'Argonaute
					</label>

					<input
						className="form-control"
						id="name"
						type="text"
						name="name"
						placeholder="Ajouter un équipier"
						onChange={(e) => setMember(e.target.value)}
						minLength="2"
						maxLength="20"
					/>
					<label
						htmlFor="textareaQualitiesArgonaute"
						className="d-inline-flex m-2 text-primary font-weight-bold"
					>
						Qualités
					</label>
					<textarea
						className="form-control"
						id="quality"
						type="text"
						name="quality"
						placeholder="Beau, courageux"
						rows="3"
						onChange={(e) => setQuality(e.target.value)}
						maxLength="200"
					/>
				</div>
				<button
					type="submit"
					value="submit"
					className="btn btn-primary m-2"
				>
					Ajouter
				</button>
			</form>
			<DisplayMembersList membersList={membersList} />
		</div>
	);
};
export default AddMember;
