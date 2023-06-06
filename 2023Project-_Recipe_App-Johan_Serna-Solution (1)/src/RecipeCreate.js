import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        
        <tbody>
          <tr>
            
            <td>
              <input
                type="text"
                name="name"
                placeholder= "name"
                value={formData.name}
                onChange={handleChange}
              />
            </td>
          
         
           
            <td>
              <input
                type="text"
                name="cuisine"
                 placeholder= "cuisine"
                value={formData.cuisine}
                onChange={handleChange}
              />
            </td>
         
        
            
            <td>
              <input
                type="url"
                name="photo"
                 placeholder= "URL"
                value={formData.photo}
                onChange={handleChange}
              />
            </td>
          
          
            
            <td>
              <textarea
                name="ingredients"
                 placeholder= "ingredients"
                value={formData.ingredients}
                onChange={handleChange}
              />
            </td>
        
          
           
            <td>
              <textarea
                name="preparation"
                placeholder="preparation"
                value={formData.preparation}
                onChange={handleChange}
              />
            </td>
          
          
            
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
