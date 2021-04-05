import React, { useState } from 'react'
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState = {
   name: string;
   price: string;
   category: string;
}


const Form = () => {

   const [formData, setFormData] = useState<FormState>({
      name:'Computador',
      price:'',
      category:'eletronicos'
   });
  
   const hanldeOnChange = (event :React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
      const name = event.target.name;
      const value = event.target.value;
      
      setFormData(data =>({ ...data,[name]: value}));
   }
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=> {
      event.preventDefault();

      console.log(formData);
    
   }
   
 return (
    <form onSubmit={handleSubmit}>
      <BaseForm  title="cadastrar um produto">
      <div className="row">
         <div className="col-6">
            <input
            value={formData.name}
            name="name"
            type="text"
            className="form-control mb-5"
            onChange={hanldeOnChange}
            placeholder="Nome do produto"
            />
            <select 
            value={formData.category}
             className="form-control mb-5" onChange={hanldeOnChange}
             name="category"
             >
               <option value="livros">Livros</option>
               <option value="computadores">Computadores</option>
               <option value="eletronicos">Eletronicos</option>
            </select>
            <input
            value={formData.price}
            name="price"
            type="text"
            className="form-control"
            onChange={hanldeOnChange}
            placeholder="Preço"
            />
         </div>
      </div>
    </BaseForm>
    </form>
    )
}

export default Form;