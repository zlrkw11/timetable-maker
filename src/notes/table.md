# Basic table knowledge from HTML

In HTML, thead, tr, and td are elements used to structure and format tables.

thead (Table Head):

This element groups the header content in a table. It is typically used to contain rows of header information that will be repeated at the top of each page if a table spans multiple pages when printed.
Inside thead, you typically have one or more tr (table row) elements, and within those, you have th (table header) elements.
tr (Table Row):

This element defines a row in a table. It can be used inside thead, tbody, or tfoot elements.
A tr contains one or more th or td elements. th elements are used in header rows, and td elements are used in the body rows.
td (Table Data):

This element defines a cell of a table that contains data. It is used inside a tr element.
Each td represents a cell in the table row.
Here's a breakdown with an example table:

```
<table>
  <thead>
    <tr>
      <th>Time</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
      <th>Thursday</th>
      <th>Friday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>8:00 AM</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>9:00 AM</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <!-- Additional rows -->
  </tbody>
</table>
```
