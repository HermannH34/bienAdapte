

const Steps = ({ chronology, step }) => {
 return (
  <div>
   <h1 className='text-2xl font-bold lg:hidden underline mb-7'>{step}</h1>
   <div className='hidden sm:block'>
    <ul className="steps mb-12">
     <li className={chronology.typeOfProperty}>Type de bien</li>
     <li className={chronology.budget}>Budget</li>
     <li className={chronology.localisation}>Localisation et environnement</li>
     <li className={chronology.priority}>Votre priorité</li>
    </ul>
   </div>
  </div>
 );
};

export default Steps;
