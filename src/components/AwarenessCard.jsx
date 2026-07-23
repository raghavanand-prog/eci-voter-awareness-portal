function AwarenessCard(props) {
    return(
        <div className="bg-white shadow-lg rounded-lg p-6 w-72">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{props.title}

            </h2>
            <p className='mt-3 text-gray-600'>{props.description}</p>
        </div>
    );
}
export default AwarenessCard;