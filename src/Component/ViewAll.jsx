import React from 'react';
import {Link} from 'react-router-dom'

const ViewAll = () => {
    return (
        <div class="dropdown">
            <button class="btn btn-warning text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                 ViewAll
            </button>
            <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/chicken.jsx">Chicken</Link></li>
                <li><Link class="dropdown-item" to="/ColdCut.jsx">ColdCut</Link></li>
                <li><Link class="dropdown-item" to="/Egg.jsx">Egg</Link></li>
                <li><Link class="dropdown-item" to="/SeaFood.jsx">Fish</Link></li>
                <li><Link class="dropdown-item" to="/Mutton.jsx">Mutton</Link></li>
                <li><Link class="dropdown-item" to="/Prawns.jsx">Prawns&Crabs</Link></li>
                <li><Link class="dropdown-item" to="/ReadyToCook.jsx">ReadyToCook</Link></li>
            </ul>
        </div>
    )
}

export default ViewAll;
