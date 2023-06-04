/** @format */
import { useForm } from "react-hook-form";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import axios from "axios";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_image_Hoestin_Token;


const AddAnItem = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();



	const onSubmit = data => {
		
		const formData = new FormData();
		formData.append("image", data.image[0]);
	

		fetch(`https://api.imgbb.com/1/upload?key=${img_hosting_token}`, {
			method: "POST",
			body: formData,
		})
			.then(res => res.json())
			.then(imageRes => {
				if (imageRes.success) {
					const imgURL = imageRes.data.display_url;
					const { name, price, category, recipe } = data;
					const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL };

					axios
						.post(`http://localhost:5000/manu`, { ...newItem }, {
							headers: {authorization : `Bearer ${localStorage.getItem('access-token')}`}
						})
						.then(res => {
							
							Swal.fire({
								position: "top-end",
								icon: "success",
								title: "added",
								showConfirmButton: false,
								timer: 1500,
							});
						});
				}
			});
	};
	return (
		<div className='w-full'>
			<SectionTitle
				title={"ADD AN ITEM"}
				subTitle={`What's new?`}
			/>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='bg-neutral-400 p-4'>
					<div className='w-full'>
						<label
							htmlFor=''
							className='block'
						>
							Recipe name*
						</label>
						<input
							{...register("name", { required: true })}
							placeholder='First name'
							className='outline-none py-3 px-4 rounded-md w-full'
						/>
					</div>
					<div className='flex items-center gap-4 py-4'>
						<div className='w-1/2'>
							<label
								htmlFor=''
								className='block'
							>
								Category *
							</label>
							<select
								{...register("category", {
									required: true,
								})}
								className='outline-none py-3 px-4 rounded-md w-full'
							>
								<option value=''>Select One</option>
								<option value='Salad'>Salad</option>
								<option value='Pizza'>Pizza</option>
								<option value='Soups'>Soups</option>
								<option value='Dessert'>Dessert</option>
								<option value='Drinks'>Drinks</option>
							</select>
						</div>
						<div className='w-1/2'>
							<label
								htmlFor=''
								className='block'
							>
								Price *
							</label>
							<input
								{...register("price", {
									required: true,
								})}
								placeholder='First name'
								className='outline-none py-3 px-4 rounded-md w-full'
							/>
						</div>
					</div>
					<div className='w-full'>
						<label
							htmlFor=''
							className='block'
						>
							Recipe name*
						</label>
						<textarea
							name=''
							id=''
							cols='30'
							rows='6'
							className='outline-none py-3 px-4 rounded-md w-full'
							{...register("recipe", { required: true })}
						></textarea>
					</div>
					<div className='py-4'>
						<input
							type='file'
							className='file-input file-input-bordered w-full max-w-xs'
							{...register("image", { required: true })}
						/>
					</div>
					<div>
						<input
							type='submit'
							className='btn'
							value='Add Item'
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddAnItem;
