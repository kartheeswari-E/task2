
const scores = [
    {
      marks: 32,
      name: "Yvette Merritt",
    },
    {
      marks: 57,
      name: "Lillian Ellis",
    },
    {
      marks: 22,
      name: "Mccall Carter",
    },
    {
      marks: 21,
      name: "Pate Collier",
    },
    {
      marks: 91,
      name: "Debra Beard",
    },
    {
      marks: 75,
      name: "Nettie Hancock",
    },
    {
      marks: 20,
      name: "Hatfield Hodge",
    },
  ];
  
  const topper=scores.filter(n=>n.marks>=90);
var name=topper.map(n=>
    {
        console.log(n.name)
    });
