import React from 'react'
import WrapperComponent from "../WrapperComponent/WrapperComponent";
export default function BasicData({title}) {
    const option = {
        tooltip: {
            trigger: 'item',
        },
        series: [{

            type: 'pie',
            radius: ['60%', '70%'],
            color: '#67E0E3',
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 10,
                name: '插眼',
                label: {
                    normal: {
                        formatter: 10 + '',
                        textStyle: {
                            fontSize: 20,   
                            color: 'var(--text-color)',
                        }
                    }
                }
            }]
        }],
        backgroundColor:"transparent"
    };
      return <WrapperComponent option={option} width={195} height={100} title={title}></WrapperComponent>;
}
