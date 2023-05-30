import { useState } from 'react';
const Section = ({ title, description, isVisible, setIsVisible, data }) => {
  // const[isVisible, setIsVisible] = useState(false);
  const [buttonText, setButtonText] = useState("show");

//   function handleFunc(){
//     setIsVisible(!isVisible);
//     if(isVisible){
//       setButtonText("show");
//     }else {
//       setButtonText("hide");
//     }
    
//   }
 
//   return(
//     <div className="border bolder-black p-2 m-2">
//       <h3 className="font-bold text-xl">{title}</h3>
//       <button className="cursor-pointer underline" onClick={handleFunc}>{buttonText}</button>
//      { isVisible && <h3>{description}</h3> }
//     </div>
//   )
// }

// or we can do conditional rendering
// console.log(isVisible);
console.log(isVisible);
return(
  <div className="border bolder-black p-2 m-2">
    <h3 className="font-bold text-xl">{title}</h3>
    {
      isVisible ? (
        <div>
          <button className="cursor-pointer underline" onClick={()=>setIsVisible('')}>Hide</button>
          <h3>{description}</h3>
        </div>
      )
      :
      (<button className="cursor-pointer underline" onClick={()=>setIsVisible(data)}>Show</button>)
    }
  </div>
)
  }

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  // const [isVisible, setIsVisible] = useState(false);
  return(
    <div>
      <h1 className="text-3xl text-bold m-2 p-2">Instamart</h1>
      <Section title={"About Instamart"} 
      description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
      isVisible={visibleSection === 'about'}
      setIsVisible={(visible)=>{
        setVisibleSection(visible)
      }}
      data={'about'}
      />
      <Section title={"Team Instamart"}
       description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
       isVisible={visibleSection === 'team'}
       setIsVisible={(visible)=>{
        setVisibleSection(visible)
      }}
      data={'team'}
      />
      <Section title={"Careers"}
       description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
       isVisible={visibleSection === 'careers'}
       setIsVisible={(visible)=>{
        setVisibleSection(visible)
      }}
      data={'careers'}
       />

      <Section title={"Product"}
       description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
       isVisible={visibleSection === 'product'}
       setIsVisible={(visible)=>{
        setVisibleSection(visible)
      }}
      data={'product'}
       />

      <Section title={"Details"}
       description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
       isVisible={visibleSection === 'details'}
       setIsVisible={(visible)=>{
        setVisibleSection(visible)
      }}
      data={'details'}
       />
    </div>
  )
}

export default Instamart;