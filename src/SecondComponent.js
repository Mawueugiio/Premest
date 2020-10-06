import React from 'react';

function SecondComponent() {
    return(
        <div>
             <p>The following table expresses the number of boys ad girls in Engineering classes</p>
            <table>
                <tr>
                    <th>Course</th>
                    <th>Boys</th>
                    <th>Girls</th>
                </tr>
                <tr>
                <th>Mechanical Engineering</th>
                <td>34</td>
                <td>20</td>
                </tr>
                <tr>
                <th>Electrical Engineering</th>
                <td>50</td>
                <td>35</td>
                </tr>
                <tr>
                <th>Computer Engineering</th>
                <td>35</td>
                <td>10</td>
                </tr>
            </table> 
        </div> 
    )
    }

   export default SecondComponent; 