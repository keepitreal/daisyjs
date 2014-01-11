/**
 * Copyright (C) 2008 Guy Van den Broeck <guy@guyvdb.eu>
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA.
 * or see http://www.gnu.org/
 */

/**
 * This diff implementation is mainly lifted from the LCS algorithm of the Eclipse project which
 * in turn is based on Myers' "An O(ND) difference algorithm and its variations"
 * (http://citeseer.ist.psu.edu/myers86ond.html) with range compression (see Wu et al.'s
 * "An O(NP) Sequence Comparison Algorithm").
 *
 * This implementation supports an upper bound on the excution time.
 *
 * Complexity: O((M + N)D) worst case time, O(M + N + D^2) expected time, O(M + N) space
 *
 * @author Guy Van den Broeck
 * @ingroup DifferenceEngine

*/

/**
 * This particular implementation is a JavaScript port of the DaisyDiff PHP implementation
 * 
 * transcribing @author Darion Welch
 * email: darion.welch@gmail.com
 * github: keepitreal
 *
*/

var DaisyJS = (function (djs) {
	djs.WikiDiff3 = function(tooLong, powLimit) {
		// set default values for parameters
		tooLong = typeof tooLong !== "undefined" ? tooLong : 2000000;
		powLimit = typeof powLimit !== "undefined" ? powLimit : 1.45;

		// Input variables (private)
		var from, to, m, n;
		this.tooLong = tooLong, this.powLimit = powLimit; 

		// State variables (private)
		var maxDifferences, lcsLengthCorrectedForHeuristic;

		// Output variables (public)
		this.length = '', this.removed = '', this.added = '', this.heuristicUsed = '';

		function diff_range(from_lines, to_lines) {

		};

		function lcs_rec(bottoml1, topl1, bottoml2, topl2, V, snake) {

		};

		function find_middle_snake(bottoml1, topl1, bottoml2, topl2, V, snake) {

		};

		function findMostProgress(M, N, limit, V) {

		};
	};

	djs.WikiDiff3.prototype.diff = function(from, to) {

	};

	djs.WikiDiff3.prototype.getLcsLength = function() {

	};

	/**
	 * Alternative representation of a set of changes, by the index
	 * ranges that are changed.
	 *
     */

    // Definition Complete
	djs.RangeDifference = function(leftstart, leftend, rightstart, rightend) {
		this.leftstart = leftstart,
		this.leftend = leftend,
		this.leftlength = leftend - leftstart,
		this.rightstart = rightstart,
		this.rightend = rightend,
		this.rightlength = rightend - rightstart;
	}

	return djs;
}(DaisyJS || {}));