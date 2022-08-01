import Planet from './planet'

const Planets = () => {
  return (
    <div>
      <h3>Planet List</h3> 
      <Planet planetName="Mercurio" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit." imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"/>
      <Planet planetName="Venus" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit." imageUrl="https://static.natgeo.pt/files/styles/image_3200/public/pia00271_detail.jpg?w=710&h=710"/>
      <Planet planetName="Terra" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit." imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/300px-The_Blue_Marble_%28remastered%29.jpg"/>
      <Planet planetName="Marte" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit." imageUrl="https://static.natgeo.pt/files/styles/image_3200/public/NASA_05_MARS.jpg?w=710&h=710"/>
      <Planet planetName="Jupiter" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit." imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg"/>
      <Planet planetName="Saturno" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit." imageUrl="https://i.pinimg.com/originals/03/52/9d/03529d0da7f58381b061d37631e73e09.jpg"/>
    </div>
  )
}

export default Planets