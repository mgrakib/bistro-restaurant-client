/** @format */

import { useEffect, useState } from "react";

const useMenu = () => {
	const [menu, setMenu] = useState([]);
	const [loader, setLoader] = useState(true);
	const [totalProduct, setTotalProduct] = useState();
	useEffect(() => {
		fetch("http://localhost:5000/totalMenu")
			.then(res => res.json())
			.then(data => {
				setTotalProduct(data?.result);
				setLoader(false);
			});
	}, []);

	console.log(totalProduct);
	const limit = 6;
	const totalBtn = Math.ceil(totalProduct / limit);
	console.log(totalBtn);
	const a = [];
	for (let i = 0; i < totalBtn; i++) {
		a.push(i);
	}

	useEffect(() => {
		fetch("http://localhost:5000/menu")
			.then(res => res.json())
			.then(data => setMenu(data));
	}, []);

	return [menu, loader, a];
};

export default useMenu;
