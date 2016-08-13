import Node from '../Node.js';
import CompileError from '../../utils/CompileError.js';
import { loopStatement } from '../../utils/patterns.js';

export default class ContinueStatement extends Node {
	transpile ( code, transforms ) {
		const loop = this.findNearest( loopStatement );
		if ( loop.shouldRewriteAsFunction ) {
			if ( this.label ) throw new CompileError( this, 'Labels are not currently supported in a loop with locally-scoped variables' );
			code.overwrite( this.start, this.start + 8, 'return' );
		}
	}
}
