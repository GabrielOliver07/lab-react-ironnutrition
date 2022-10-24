import React, { useState } from 'react'
import { Input, Divider, Button } from 'antd'

const AddFoodForm = (props) => {
    const [form, setForm] = useState ({name:"", image:"",calories:0, servings:0})

function handleChange(event){
    setForm({...form,[event.target.name]:event.target.value})
}
console.log(props)
    
function handleSubmt(event){
    event.preventDefault()
    props.setFoodsUpd([...props.foodsUpd,form])
}

    return (
        <form style={{display:'flex', flexDirection: 'column', alignItems:'center'}} onSubmit={handleSubmt}>
            <Divider> Add Food Entry </Divider>
            <div style={{ width: 450 }} >
                <label>Name</label>
                <Input
                    name='name'
                    placeholder='Name of Food'
                    type='text'
                    value={form.name}
                    onChange={handleChange}
                    style={{ marginBottom: '1em', border: '1px solid #989898' }}
                />
                <label>Image</label>
                <Input
                    name='image'
                    placeholder='Image URL'
                    type='text'
                    value={form.image}
                    onChange={handleChange}
                    style={{ marginBottom: '1em', border: '1px solid #989898' }}
                />
                <label>Calories</label>
                <Input
                    name='calories'
                    placeholder='Calories'
                    type='number'
                    value={form.calories}
                    onChange={handleChange}
                    style={{ marginBottom: '1em', border: '1px solid #989898' }}
                />
                <label>Servings</label>
                <Input
                    name='servings'
                    placeholder='Servings'
                    type='number'
                    value={form.servings}
                    onChange={handleChange}
                    style={{ marginBottom: '1em', border: '1px solid #989898' }}
                />
                <Button type='submit'> Create </Button>
            </div>
        </form>
    )
}

export default AddFoodForm