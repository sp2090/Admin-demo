import React from 'react';
import './AdminTable.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AdminTable = () => {

    const rows = [
        {
            id: 123,
            product:"Misuhrobir Hair Trimmer",
            img: "https://rukminim1.flixcart.com/image/416/416/xif0q/trimmer/x/c/a/0-25-4-mm-hair-trimmer-for-men-beard-trimmer-for-men-golden-original-imagjqywjgdsnyyg.jpeg?q=70",
            customer : "sagar",
            date: "1 Nov",
            amount: "120 Rs.",
            PaymentMethod: "COD",
            status:"Approved"
        },
        {
            id: 183,
            product:"Nova NHT-1039",
            img: "https://rukminim1.flixcart.com/image/416/416/kzegk280/trimmer/l/q/j/0-5-12-mm-nht-1039-usb-stainless-steel-cordless-nova-original-imagbf7jwr54j4gg.jpeg?q=70",
            customer : "him",
            date: "10 oct",
            amount: "133 Rs.",
            PaymentMethod: "COD",
            status:"Approved"
        },
        {
            id: 163,
            product:"VGR V-022",
            img: "https://rukminim1.flixcart.com/image/416/416/kp8ntzk0/trimmer/l/s/e/0-5-12-mm-stainless-steel-v-055-professional-hair-trimmer-corded-original-imag3gx2pph9fu7h.jpeg?q=70",
            customer : "mayank",
            date: "15 Nov",
            amount: "1240 Rs.",
            PaymentMethod: "COD",
            status:"pending"
        },
        {
            id: 127,
            product: "Phillips BT3231",
            img:"https://rukminim1.flixcart.com/image/416/416/kp8ntzk0/trimmer/l/s/e/0-5-12-mm-stainless-steel-v-055-professional-hair-trimmer-corded-original-imag3gx2pph9fu7h.jpeg?q=70",
            customer : "rama",
            date: "10 Nov",
            amount: "1200 Rs.",
            PaymentMethod: "COD",
            status:"Approved"
        },
        {
            id: 121,
            product:"Nova NG-1153",
            img: "https://rukminim1.flixcart.com/image/416/416/kvcpn680/trimmer/c/j/v/0-5-12-mm-ng-1153-05-digital-usb-stainless-steel-corded-cordless-original-imag89wwzgzgrzcf.jpeg?q=70",
            customer : "nik",
            date: "11 Nov",
            amount: "150 Rs.",
            PaymentMethod: "online",
            status:"Approved"
        }

    ]


    return (
        
        
<TableContainer component={Paper} className='AdminTable' style={{backgroundColor:"white"}}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell className='tablecell'> Tracking Id </TableCell>
            <TableCell className='tablecell'> Products </TableCell>
            <TableCell className='tablecell'> Customer </TableCell>
            <TableCell className='tablecell'> Date </TableCell>
            <TableCell className='tablecell'> Amount </TableCell>
            <TableCell className='tablecell'> PaymentMethod </TableCell>
            <TableCell className='tablecell'> Status </TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tablecell' > {row.id} </TableCell>
              <TableCell className='tablecell' >
                <div className="cellwrapper">
                    <img src={row.img} alt="" className="imgT" />
                    {row.product}
                </div>
              </TableCell>
              <TableCell className='tablecell' >{row.customer}</TableCell>
              <TableCell className='tablecell' >{row.date}</TableCell>
              <TableCell className='tablecell' >{row.amount}</TableCell>
              <TableCell className='tablecell' >{row.PaymentMethod}</TableCell>
              <TableCell className='tablecell' >
               <span className={`status ${row.status}`}>  {row.status} </span>
                </TableCell>
            </TableRow> 
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    
    );
};

export default AdminTable;