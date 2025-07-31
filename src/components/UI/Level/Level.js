import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Level.scss";
import { gameModes } from "../../../utils/constant";

export const Level = (props) => {
	const navigate = useNavigate();

	const machinePlayAction = ( aiLevel ) => {
		navigate('/gameScene', { state: { mode: gameModes['P2E'], aiLevel: aiLevel } });
	}
	
	const connectWallet = async () => {
		// Call the widget's trigger function instead of clicking the hidden button
		if (window.triggerMaskModal) {
			window.triggerMaskModal();
		} else {
			console.log("Widget not loaded yet");
		}
	}

    return (
			<div className="selectLevel">
				<div className="u-container">
					<div className="u-ribbon">Choose Level</div>
					<div className="u-content">
					<div className="u-content-container">
						<div className="u-table-wrap">
							<div className="u-row">
								<div className="u-item-container">
									<button className="u-item" onClick={ () => { alert('Connect Wallet please!') } }>AI MonKey</button>
								</div>
								<div className="u-item-container">
									<button className="u-item" onClick={ () => { alert('Connect Wallet please!')} }>Beginner</button>
								</div>
							</div>
							<div className="u-row">
								<div className="u-item-container">
									<button className="u-item" onClick={ () => { alert('Connect Wallet please!')} }>Intermediate</button>
								</div>
								<div className="u-item-container">
									<button className="u-item" onClick={ () => { alert('Connect Wallet please!')} }>Advanced</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="u-ribbon1" ><button id="level-connect-wallet-btn" onClick={ (e) => { 
					e.preventDefault();
					e.stopPropagation();
					connectWallet();
				} }>Connect Wallet </button></div>
			</div>
		</div>
    );
}

export default Level;