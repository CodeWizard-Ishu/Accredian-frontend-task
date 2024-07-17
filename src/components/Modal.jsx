import React from 'react';
import { Modal, Button, TextField, Box, Typography} from '@mui/material';

const ReferNowModal = ({ open, handleClose, handleSubmit }) => {
    const [formData, setFormData] = React.useState({
        referrerName: '',
        referrerEmail: '',
        refereeName: '',
        refereeEmail: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(formData); 
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box 
                p={4} 
                bgcolor="white" 
                maxWidth={500} 
                borderRadius={5} 
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h6" gutterBottom>Refer a Friend</Typography>
                <form onSubmit={onSubmit} style={{ width: '100%' }}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Your Name"
                        name="referrerName"
                        value={formData.referrerName}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Your Email"
                        name="referrerEmail"
                        type="email"
                        value={formData.referrerEmail}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Referee Full Name"
                        name="refereeName"
                        value={formData.refereeName}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Referee Email"
                        name="refereeEmail"
                        type="email"
                        value={formData.refereeEmail}
                        onChange={handleChange}
                        required
                    />
                    <Box mt={2} display="flex" justifyContent="space-between" width="100%">
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default ReferNowModal;