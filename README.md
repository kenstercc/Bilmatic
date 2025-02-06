![Bilmatic-Logo-2](https://github.com/user-attachments/assets/1cde5cd8-1847-46c0-abb4-3358447d492f) 

An open source generic, rule and formula based billing application to support various billing needs for most businesses and industries.  The billing engine will accommodate charging fees based on transactions and account asset value.  

The final product will provide billing for advisory management fees as well as interest calculation for margin and security lending.     


The application will be built under the following service Model;
- **Billing Service** 
- **Fee Calculation** 
- **Distribution and Collection**
- **Invoicing and Payment Management**

To provide the required flexibility, a dynamic calculator will be build based on user defined formula and exception pricing will be determined by a set of Boolean logic.   

## Features

#### _Features that are implemented marked with **_ 
 
#### _1 Billing Service **_
##### 1.1 Customer Management
##### 1.2 Billing Definitions
            1.2.1 Establish and maintain billing qualifications
            1.2.2 Billing transaction bundling
##### 1.3 Maintain billing history
##### 1.4 Rebate and reversal
##### 1.5 Initiate manual billing
##### 1.6 Billing reconcilations
#### _2 Fee Calculation **_
##### _2.1 Contract Definitions (fee schedule) **_
##### 2.2 Asset Class Definitions
##### _2.3 Calculate transaction fees & time-based fees **_
            2.3.1 Determine billing exemption
            2.3.2 Calculate exception fees
            2.3.3 Dynamic formula
            _2.3.4 Determine min/max fees **_
            _2.3.5 Calculate regular and asset based fees **_
            _2.3.6 Realtime what-if calculation **_
            _2.3.7 Batch calculation process **_
##### 2.4 Calculate Advisory fees
            2.4.1 Calculate flow fees
            2.4.2 Calculate wrap fees
            2.4.3 Calculate account inception fee
            2.4.4 Calculate account periodic fee
            2.4.5 Calculation account termination fee
            2.4.6 Calculation payee/payor/sleeve manager fees
### 3 Collections & Distribution
#### 3.1 Maintain payout and distribution schedule
#### 3.2 Calculate payout detail
#### 3.3 Record payout info
#### 3.4 Create payout file
### 4 Invoicing & Payment Management
#### 4.1 Create Customer Invoice
#### 4.2 Create Receivable and payable detail
#### 4.3 Payment Management

## Technologies Used
#### Frontend: Javascript/AG-Grid
#### Backend: Node.js (Express)
#### Database: MySQL
#### Libraries/Frameworks: Express.js

## Getting Started
### Prerequisites

#### Ensure you have the following installed on your machine:

#### Node.js (v14 or later)
#### MySQL (v5.7 or later)
#### npm (v6 or later)

### Installation
#### Clone this repository (kenstercc/Bilmatic) to your local machine (frontend):

#### Install and setup mySQL DB
##### - See Data model folder in kenstercc/Bilmatic
##### - See DB schema in kenstercc/Bilmatic_backend directory, ***.SQL files

#### Clone repository (kenstercc/Bilmatic_backend) to your local machine (mysql DB APIs)

#### Clone repositiory (kenstercc/Bilmatic_calculator) to your local machine (Batch Calculator process)

## Contributing
#### We welcome contributions! To contribute, follow these steps:

#### Fork the repository.
##### Create a new branch: git checkout -b feature/your-feature-name.
##### Make your changes and commit them: git commit -m 'Add new feature'.
##### Push to the branch: git push origin feature/your-feature-name.
##### Create a pull request.
##### Please make sure your code passes all tests and adheres to the project's coding standards.

## Happy coding! 🎉

### Feel free to adjust the text as per your project structure or preferences. Let me know if you'd like to modify or add anything!
