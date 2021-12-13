class Figure {
    constructor() {
      this.coordinates = [[], [], [], []];
      //Variable to define the amount of rotations in each figure
      this.rotation;
      //Variable to count when the rotation reaches the limit of each figure
      this.count = 0;
    }
    //Method to rotate the figure respect a middle point
    rotate() {}
  }
  
  class L extends Figure {
    constructor() {
      super();
      this.coordinates = [
        [0, 5],
        [1, 5],
        [2, 5],
        [2, 6],
      ];
      this.rotation = 4;
    }
  
    rotate() {
      if (this.count == 0) {
        this.coordinates[0][0] = this.coordinates[2][0];
        this.coordinates[0][1] = this.coordinates[2][1] + 2;
        this.coordinates[1][0] = this.coordinates[2][0];
        this.coordinates[1][1] = this.coordinates[2][1] + 1;
        this.coordinates[3][0] = this.coordinates[2][0] + 1;
        this.coordinates[3][1] = this.coordinates[2][1];
      }
      if (this.count == 1) {
        this.coordinates[0][0] = this.coordinates[2][0] + 1;
        this.coordinates[0][1] = this.coordinates[2][1];
        this.coordinates[1][0] = this.coordinates[2][0] + 2;
        this.coordinates[1][1] = this.coordinates[2][1];
        this.coordinates[3][0] = this.coordinates[2][0];
        this.coordinates[3][1] = this.coordinates[2][1] - 1;
      }
      if (this.count == 2) {
        this.coordinates[0][0] = this.coordinates[2][0];
        this.coordinates[0][1] = this.coordinates[2][1] - 2;
        this.coordinates[1][0] = this.coordinates[2][0];
        this.coordinates[1][1] = this.coordinates[2][1] - 1;
        this.coordinates[3][0] = this.coordinates[2][0] - 1;
        this.coordinates[3][1] = this.coordinates[2][1];
      }
      if (this.count == 3) {
        this.coordinates[0][0] = this.coordinates[2][0] - 2;
        this.coordinates[0][1] = this.coordinates[2][1];
        this.coordinates[1][0] = this.coordinates[2][0] - 1;
        this.coordinates[1][1] = this.coordinates[2][1];
        this.coordinates[3][0] = this.coordinates[2][0];
        this.coordinates[3][1] = this.coordinates[2][1] + 1;
      }
    }
  }
  
  class Li extends Figure {
    constructor() {
      super();
      this.coordinates = [
        [0, 5],
        [1, 5],
        [2, 4],
        [2, 5],
      ];
      this.rotation = 4;
    }
    rotate() {
      if (this.count == 0) {
        this.coordinates[0][0] = this.coordinates[3][0];
        this.coordinates[0][1] = this.coordinates[3][1] + 2;
        this.coordinates[1][0] = this.coordinates[3][0];
        this.coordinates[1][1] = this.coordinates[3][1] + 1;
        this.coordinates[2][0] = this.coordinates[3][0] - 1;
        this.coordinates[2][1] = this.coordinates[3][1];
         
      }
      if (this.count == 1) {
        this.coordinates[0][0] = this.coordinates[3][0] + 2;
        this.coordinates[0][1] = this.coordinates[3][1];
        this.coordinates[1][0] = this.coordinates[3][0] + 1;
        this.coordinates[1][1] = this.coordinates[3][1];
        this.coordinates[2][0] = this.coordinates[3][0];
        this.coordinates[2][1] = this.coordinates[3][1] + 1;
      }
      if (this.count == 2) {
        this.coordinates[0][0] = this.coordinates[3][0];
        this.coordinates[0][1] = this.coordinates[3][1] - 2;
        this.coordinates[1][0] = this.coordinates[3][0];
        this.coordinates[1][1] = this.coordinates[3][1] - 1;
        this.coordinates[2][0] = this.coordinates[3][0] + 1;
        this.coordinates[2][1] = this.coordinates[3][1] ;
      }
      if (this.count == 3) {
        this.coordinates[0][0] = this.coordinates[3][0] - 2;
        this.coordinates[0][1] = this.coordinates[3][1];
        this.coordinates[1][0] = this.coordinates[3][0] - 1;
        this.coordinates[1][1] = this.coordinates[3][1];
        this.coordinates[2][0] = this.coordinates[3][0];
        this.coordinates[2][1] = this.coordinates[3][1] - 1;
      }
    }
  }
  
  class Z extends Figure {
    constructor() {
      super();
      this.coordinates = [
        [0, 4],
        [0, 5],
        [1, 5],
        [1, 6],
      ];
      this.rotation = 2;
    }
    rotate() {
      if (this.count == 0) {
        this.coordinates[0][0] = this.coordinates[1][0] - 1;
        this.coordinates[0][1] = this.coordinates[1][1];
        this.coordinates[2][0] = this.coordinates[1][0];
        this.coordinates[2][1] = this.coordinates[1][1] - 1;
        this.coordinates[3][0] = this.coordinates[1][0] + 1;
        this.coordinates[3][1] = this.coordinates[1][1] - 1;
         
      }
      if (this.count == 1) {
        this.coordinates[0][0] = this.coordinates[1][0];
        this.coordinates[0][1] = this.coordinates[1][1] - 1;
        this.coordinates[2][0] = this.coordinates[1][0] + 1;
        this.coordinates[2][1] = this.coordinates[1][1];
        this.coordinates[3][0] = this.coordinates[1][0] + 1;
        this.coordinates[3][1] = this.coordinates[1][1] + 1;
      }
      
    }
  }
  
  class Zi extends Figure {
    constructor() {
      super();
      this.coordinates = [
        [0, 5],
        [0, 6],
        [1, 5],
        [1, 4],
      ];
      this.rotation = 2;
    }
    rotate() {
      if (this.count == 0) {
        this.coordinates[1][0] = this.coordinates[0][0] -1;
        this.coordinates[1][1] = this.coordinates[0][1];
        this.coordinates[2][0] = this.coordinates[0][0];
        this.coordinates[2][1] = this.coordinates[0][1] + 1;
        this.coordinates[3][0] = this.coordinates[0][0] + 1;
        this.coordinates[3][1] = this.coordinates[0][1] + 1;
         
      }
      if (this.count == 1) {
        this.coordinates[1][0] = this.coordinates[0][0];
        this.coordinates[1][1] = this.coordinates[0][1] + 1;
        this.coordinates[2][0] = this.coordinates[0][0] + 1;
        this.coordinates[2][1] = this.coordinates[0][1];
        this.coordinates[3][0] = this.coordinates[0][0] + 1;
        this.coordinates[3][1] = this.coordinates[0][1] -1;
      }
      
    }
  }
  
  class Sqare extends Figure {
    constructor() {
      super();
      this.coordinates = [
        [0, 5],
        [0, 6],
        [1, 5],
        [1, 6],
      ];
      this.rotation = 0;
    }
    
  }
  
  class T extends Figure {
    constructor() {
      super();
      this.coordinates = [
        [0, 3],
        [0, 4],
        [0, 5],
        [1, 4],
      ];
      this.rotation = 4;
    }
    rotate() {
      if (this.count == 0) {
        this.coordinates[0][0] = this.coordinates[1][0] - 1;
        this.coordinates[0][1] = this.coordinates[1][1];       
        this.coordinates[2][0] = this.coordinates[1][0] + 1;    
        this.coordinates[2][1] = this.coordinates[1][1] ;       
        this.coordinates[3][0] = this.coordinates[1][0];
        this.coordinates[3][1] = this.coordinates[1][1] - 1;    
  
      }
     
      if (this.count == 1) {
        this.coordinates[0][0] = this.coordinates[1][0] ;      
        this.coordinates[0][1] = this.coordinates[1][1]-1;      
        this.coordinates[2][0] = this.coordinates[1][0];        
        this.coordinates[2][1] = this.coordinates[1][1]+1;
        this.coordinates[3][0] = this.coordinates[1][0]-1;      
        this.coordinates[3][1] = this.coordinates[1][1];
      }
      if (this.count == 2) {
        this.coordinates[0][0] = this.coordinates[1][0] - 1 ;      
        this.coordinates[0][1] = this.coordinates[1][1];      
        this.coordinates[2][0] = this.coordinates[1][0]+ 1;        
        this.coordinates[2][1] = this.coordinates[1][1];
        this.coordinates[3][0] = this.coordinates[1][0];      
        this.coordinates[3][1] = this.coordinates[1][1]+1;
      }
      if (this.count == 3) {
        this.coordinates[0][0] = this.coordinates[1][0];      
        this.coordinates[0][1] = this.coordinates[1][1] - 1;      
        this.coordinates[2][0] = this.coordinates[1][0];        
        this.coordinates[2][1] = this.coordinates[1][1] + 1;
        this.coordinates[3][0] = this.coordinates[1][0]+1;      
        this.coordinates[3][1] = this.coordinates[1][1];
      }
  
    }
  }
  
  class l extends Figure {
    constructor() {
      super();
      this.coordinates = [
        [0, 5],
        [1, 5],
        [2, 5],
        [3, 5],
      ];
      this.rotation = 2;
    }
    rotate() {
      if (this.count == 0) {
        this.coordinates[0][0] = this.coordinates[1][0];      
        this.coordinates[0][1] = this.coordinates[1][1] + 1;      
        this.coordinates[2][0] = this.coordinates[1][0];        
        this.coordinates[2][1] = this.coordinates[1][1] - 1;
        this.coordinates[3][0] = this.coordinates[1][0];      
        this.coordinates[3][1] = this.coordinates[1][1] - 2;
      }
      if (this.count == 1) {
        this.coordinates[0][0] = this.coordinates[1][0] - 1;      
        this.coordinates[0][1] = this.coordinates[1][1];      
        this.coordinates[2][0] = this.coordinates[1][0] + 1;        
        this.coordinates[2][1] = this.coordinates[1][1];
        this.coordinates[3][0] = this.coordinates[1][0] + 2;      
        this.coordinates[3][1] = this.coordinates[1][1];
      }
    }
  }
  
  export { L, Li, Z, Zi, Sqare, T, l };
  