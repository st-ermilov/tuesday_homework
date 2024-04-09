import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    console.log(props)
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 150,
                color: 'success.main',
                '& .MuiSlider-thumb': {
                    position: "absolute",
                    width: 10,
                    height: 10
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
