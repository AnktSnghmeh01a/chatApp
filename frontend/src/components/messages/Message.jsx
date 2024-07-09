import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-start'>
      
    	<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s" />
				</div>
			</div>

     <div className='chat-bubble text-white pb-2'>hello</div>
     <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>2:09</div>


    </div>
  )
}

export default Message